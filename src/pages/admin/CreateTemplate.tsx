import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import SEO from "@/components/SEO";
import { ArrowLeft } from "lucide-react";

const CreateTemplate = () => {
  const navigate = useNavigate();
  const { templateId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    destination: "",
    duration_days: 8,
    base_price_aed: 0,
    description: "",
    inclusions: [] as string[],
    exclusions: [] as string[],
  });

  useEffect(() => {
    checkAuth();
    if (templateId) {
      loadTemplate();
    }
  }, [templateId]);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate("/admin/login");
      return;
    }

    const { data: roles } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", session.user.id);

    const hasAdminRole = roles?.some(r => 
      r.role === "super_admin" || r.role === "school_admin"
    );

    if (!hasAdminRole) {
      toast.error("Unauthorized access");
      navigate("/");
    }
  };

  const loadTemplate = async () => {
    try {
      const { data, error } = await supabase
        .from("trip_templates")
        .select("*")
        .eq("id", templateId)
        .single();

      if (error) throw error;
      
      setFormData({
        name: data.name,
        destination: data.destination,
        duration_days: data.duration_days,
        base_price_aed: data.base_price_aed,
        description: data.description || "",
        inclusions: data.inclusions || [],
        exclusions: data.exclusions || [],
      });
    } catch (error: any) {
      toast.error("Failed to load template");
      console.error(error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (templateId) {
        const { error } = await supabase
          .from("trip_templates")
          .update(formData)
          .eq("id", templateId);

        if (error) throw error;
        toast.success("Template updated successfully");
      } else {
        const { error } = await supabase
          .from("trip_templates")
          .insert([formData]);

        if (error) throw error;
        toast.success("Template created successfully");
      }

      navigate("/admin/templates");
    } catch (error: any) {
      toast.error(templateId ? "Failed to update template" : "Failed to create template");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SEO 
        title={`${templateId ? 'Edit' : 'Create'} Template - Admin | Kapes Adventures`}
        description="Manage trip template"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate("/admin/templates")}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Templates
            </Button>
            <h1 className="text-3xl font-academy-bold">
              {templateId ? 'Edit' : 'Create'} Template
            </h1>
          </div>

          <Card className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Template Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="destination">Destination *</Label>
                  <Input
                    id="destination"
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">Duration (days) *</Label>
                  <Input
                    id="duration"
                    type="number"
                    min="1"
                    value={formData.duration_days}
                    onChange={(e) => setFormData({ ...formData, duration_days: parseInt(e.target.value) })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="price">Base Price (AED) *</Label>
                  <Input
                    id="price"
                    type="number"
                    min="0"
                    step="0.01"
                    value={formData.base_price_aed}
                    onChange={(e) => setFormData({ ...formData, base_price_aed: parseFloat(e.target.value) })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="included">Included Items</Label>
                <Textarea
                  id="included"
                  value={formData.inclusions.join('\n')}
                  onChange={(e) => setFormData({ ...formData, inclusions: e.target.value.split('\n').filter(i => i.trim()) })}
                  rows={3}
                  placeholder="One item per line"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="excluded">Excluded Items</Label>
                <Textarea
                  id="excluded"
                  value={formData.exclusions.join('\n')}
                  onChange={(e) => setFormData({ ...formData, exclusions: e.target.value.split('\n').filter(i => i.trim()) })}
                  rows={3}
                  placeholder="One item per line"
                />
              </div>

              <div className="flex gap-4">
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Saving..." : (templateId ? "Update Template" : "Create Template")}
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => navigate("/admin/templates")}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
};

export default CreateTemplate;