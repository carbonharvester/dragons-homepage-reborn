import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import SEO from "@/components/SEO";
import { ArrowLeft, Plus, Edit } from "lucide-react";

interface Addon {
  id: string;
  name: string;
  description: string | null;
  price_aed: number;
  addon_type: string;
  active: boolean;
  display_order: number;
  is_subscription: boolean;
}

const ManageAddons = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [addons, setAddons] = useState<Addon[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingAddon, setEditingAddon] = useState<Addon | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price_aed: "",
    addon_type: "insurance",
    active: true,
    display_order: 0,
    is_subscription: false,
  });

  useEffect(() => {
    checkAuth();
    loadAddons();
  }, []);

  const checkAuth = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      navigate("/admin/login");
      return;
    }

    const { data: roles } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", user.id)
      .eq("role", "super_admin");

    if (!roles || roles.length === 0) {
      toast({
        variant: "destructive",
        title: "Access Denied",
        description: "Super admin access required.",
      });
      navigate("/admin/dashboard");
    }
  };

  const loadAddons = async () => {
    try {
      const { data, error } = await supabase
        .from("addons")
        .select("*")
        .order("display_order", { ascending: true });

      if (error) throw error;
      setAddons(data || []);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveAddon = async () => {
    try {
      const addonData = {
        name: formData.name,
        description: formData.description || null,
        price_aed: parseFloat(formData.price_aed),
        addon_type: formData.addon_type,
        active: formData.active,
        display_order: formData.display_order,
        is_subscription: formData.is_subscription,
      };

      if (editingAddon) {
        const { error } = await supabase
          .from("addons")
          .update(addonData)
          .eq("id", editingAddon.id);

        if (error) throw error;

        toast({
          title: "Add-on updated!",
          description: "Add-on has been updated successfully.",
        });
      } else {
        const { error } = await supabase
          .from("addons")
          .insert(addonData);

        if (error) throw error;

        toast({
          title: "Add-on created!",
          description: "New add-on has been created.",
        });
      }

      setIsDialogOpen(false);
      setEditingAddon(null);
      setFormData({
        name: "",
        description: "",
        price_aed: "",
        addon_type: "insurance",
        active: true,
        display_order: 0,
        is_subscription: false,
      });
      loadAddons();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    }
  };

  const handleEditAddon = (addon: Addon) => {
    setEditingAddon(addon);
    setFormData({
      name: addon.name,
      description: addon.description || "",
      price_aed: addon.price_aed.toString(),
      addon_type: addon.addon_type,
      active: addon.active,
      display_order: addon.display_order,
      is_subscription: addon.is_subscription,
    });
    setIsDialogOpen(true);
  };

  return (
    <>
      <SEO title="Manage Add-Ons | Admin" description="Manage trip add-ons and extras" />
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <Button variant="ghost" onClick={() => navigate("/admin/dashboard")} className="mb-2">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Button>
            <h1 className="text-2xl font-bold text-dragon-dark">Manage Add-Ons</h1>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Trip Add-Ons</CardTitle>
                <CardDescription>Manage insurance, kits, and other extras</CardDescription>
              </div>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add New
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{editingAddon ? "Edit Add-On" : "Create New Add-On"}</DialogTitle>
                    <DialogDescription>
                      {editingAddon ? "Update add-on information" : "Add a new trip extra"}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="price">Price (AED)</Label>
                      <Input
                        id="price"
                        type="number"
                        value={formData.price_aed}
                        onChange={(e) => setFormData({ ...formData, price_aed: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="type">Type</Label>
                      <Input
                        id="type"
                        value={formData.addon_type}
                        onChange={(e) => setFormData({ ...formData, addon_type: e.target.value })}
                        placeholder="e.g., insurance, kit, equipment"
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="active"
                        checked={formData.active}
                        onCheckedChange={(checked) => setFormData({ ...formData, active: checked })}
                      />
                      <Label htmlFor="active">Active</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="subscription"
                        checked={formData.is_subscription}
                        onCheckedChange={(checked) => setFormData({ ...formData, is_subscription: checked })}
                      />
                      <Label htmlFor="subscription">Is Subscription</Label>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleSaveAddon}>
                      {editingAddon ? "Update" : "Create"}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <p>Loading add-ons...</p>
              ) : addons.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">
                  No add-ons yet. Create your first add-on to get started.
                </p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Price (AED)</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {addons.map((addon) => (
                      <TableRow key={addon.id}>
                        <TableCell className="font-medium">{addon.name}</TableCell>
                        <TableCell>{addon.addon_type}</TableCell>
                        <TableCell>{addon.price_aed.toLocaleString()}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded text-xs ${
                            addon.active 
                              ? "bg-green-100 text-green-800" 
                              : "bg-gray-100 text-gray-800"
                          }`}>
                            {addon.active ? "Active" : "Inactive"}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleEditAddon(addon)}
                          >
                            <Edit className="h-3 w-3" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </main>
      </div>
    </>
  );
};

export default ManageAddons;
