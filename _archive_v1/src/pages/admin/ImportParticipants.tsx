import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Upload, AlertCircle, CheckCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const ImportParticipants = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isImporting, setIsImporting] = useState(false);
  const [importResult, setImportResult] = useState<{
    success_count: number;
    error_count: number;
    errors: any[];
  } | null>(null);

  const handleImport = async () => {
    setIsImporting(true);
    setImportResult(null);

    try {
      // Call the import function
      const { data, error } = await supabase.rpc('import_trip_participants');

      if (error) throw error;

      if (data && data.length > 0) {
        const result = data[0];
        setImportResult({
          success_count: result.success_count || 0,
          error_count: result.error_count || 0,
          errors: Array.isArray(result.errors) ? result.errors : []
        });

        toast({
          title: "Import Complete",
          description: `Successfully imported ${result.success_count} participants. ${result.error_count} errors.`,
        });
      }
    } catch (error: any) {
      console.error("Import error:", error);
      toast({
        variant: "destructive",
        title: "Import Failed",
        description: error.message,
      });
    } finally {
      setIsImporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/admin/dashboard")}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-dragon-dark">Import Trip Participants</h1>
              <p className="text-sm text-muted-foreground">
                Import existing trip participant data into the new platform
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Import Data</CardTitle>
            <CardDescription>
              This will import all trip participants from the registration form and create parent accounts for them.
              Parents will need to reset their passwords on first login.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Before You Import</AlertTitle>
              <AlertDescription>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>This will create parent accounts using emergency contact emails</li>
                  <li>Student records will be linked to their parents</li>
                  <li>Duplicate emails will be skipped automatically</li>
                  <li>Parents will need to reset their passwords</li>
                </ul>
              </AlertDescription>
            </Alert>

            <Button 
              onClick={handleImport} 
              disabled={isImporting}
              className="w-full"
            >
              <Upload className="h-4 w-4 mr-2" />
              {isImporting ? "Importing..." : "Start Import"}
            </Button>

            {importResult && (
              <div className="space-y-4 mt-6">
                <Alert variant={importResult.error_count > 0 ? "destructive" : "default"}>
                  <CheckCircle className="h-4 w-4" />
                  <AlertTitle>Import Results</AlertTitle>
                  <AlertDescription>
                    <div className="space-y-2 mt-2">
                      <p>✅ Successfully imported: {importResult.success_count} participants</p>
                      {importResult.error_count > 0 && (
                        <p>❌ Errors: {importResult.error_count}</p>
                      )}
                    </div>
                  </AlertDescription>
                </Alert>

                {importResult.errors && importResult.errors.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm">Error Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        {importResult.errors.map((error: any, index: number) => (
                          <div key={index} className="p-2 bg-red-50 rounded">
                            <p className="font-medium">{error.email}</p>
                            <p className="text-muted-foreground">{error.error}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ImportParticipants;
