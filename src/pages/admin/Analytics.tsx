import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Users, TrendingUp, FileText } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface Analytics {
  trip_id: string;
  title: string;
  destination: string;
  trip_start_date: string;
  status: string;
  max_participants: number;
  total_bookings: number;
  confirmed_bookings: number;
  paid_bookings: number;
  total_revenue_aed: number;
  collected_revenue_aed: number;
  total_interests: number;
  waitlist_count: number;
  documents_submitted: number;
  documents_approved: number;
}

const Analytics = () => {
  const [analytics, setAnalytics] = useState<Analytics[]>([]);
  const [overallStats, setOverallStats] = useState({
    totalRevenue: 0,
    collectedRevenue: 0,
    totalBookings: 0,
    totalInterests: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadAnalytics();
  }, []);

  const loadAnalytics = async () => {
    try {
      const { data, error } = await supabase
        .from("trip_analytics")
        .select("*")
        .order("trip_start_date", { ascending: false });

      if (error) throw error;

      setAnalytics(data || []);

      // Calculate overall stats
      const stats = (data || []).reduce(
        (acc, trip) => ({
          totalRevenue: acc.totalRevenue + (trip.total_revenue_aed || 0),
          collectedRevenue:
            acc.collectedRevenue + (trip.collected_revenue_aed || 0),
          totalBookings: acc.totalBookings + (trip.total_bookings || 0),
          totalInterests: acc.totalInterests + (trip.total_interests || 0),
        }),
        { totalRevenue: 0, collectedRevenue: 0, totalBookings: 0, totalInterests: 0 }
      );

      setOverallStats(stats);
    } catch (error: any) {
      console.error("Error loading analytics:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-AE", {
      style: "currency",
      currency: "AED",
    }).format(amount || 0);
  };

  if (isLoading) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-academy-bold mb-6">Analytics & Reporting</h1>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(overallStats.totalRevenue)}
            </div>
            <p className="text-xs text-muted-foreground">
              Collected: {formatCurrency(overallStats.collectedRevenue)}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{overallStats.totalBookings}</div>
            <p className="text-xs text-muted-foreground">Across all trips</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Interests</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{overallStats.totalInterests}</div>
            <p className="text-xs text-muted-foreground">Registered interests</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Trips</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.length}</div>
            <p className="text-xs text-muted-foreground">Total trips</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Table */}
      <Card>
        <CardHeader>
          <CardTitle>Trip Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Trip</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Capacity</TableHead>
                <TableHead>Bookings</TableHead>
                <TableHead>Payment</TableHead>
                <TableHead>Revenue</TableHead>
                <TableHead>Documents</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {analytics.map((trip) => (
                <TableRow key={trip.trip_id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{trip.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {trip.destination}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    {new Date(trip.trip_start_date).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    {trip.confirmed_bookings}
                    {trip.max_participants && ` / ${trip.max_participants}`}
                    {trip.waitlist_count > 0 && (
                      <Badge variant="secondary" className="ml-2">
                        +{trip.waitlist_count} waiting
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <p>Confirmed: {trip.confirmed_bookings}</p>
                      <p className="text-muted-foreground">
                        Paid: {trip.paid_bookings}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    {trip.paid_bookings > 0
                      ? Math.round(
                          (trip.paid_bookings / trip.total_bookings) * 100
                        ) + "%"
                      : "0%"}
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <p>{formatCurrency(trip.total_revenue_aed)}</p>
                      <p className="text-muted-foreground">
                        Collected: {formatCurrency(trip.collected_revenue_aed)}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    {trip.documents_approved}/{trip.documents_submitted}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        trip.status === "active"
                          ? "default"
                          : trip.status === "draft"
                          ? "secondary"
                          : "outline"
                      }
                    >
                      {trip.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
