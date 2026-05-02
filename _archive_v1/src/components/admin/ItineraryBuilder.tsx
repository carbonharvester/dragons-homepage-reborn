import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash, GripVertical } from "lucide-react";

interface ItineraryDay {
  day: string;
  title: string;
  activities: string[];
}

interface ItineraryBuilderProps {
  itinerary: ItineraryDay[];
  onChange: (itinerary: ItineraryDay[]) => void;
}

export const ItineraryBuilder = ({ itinerary, onChange }: ItineraryBuilderProps) => {
  const addDay = () => {
    onChange([
      ...itinerary,
      {
        day: `Day ${itinerary.length + 1}`,
        title: "",
        activities: [""]
      }
    ]);
  };

  const removeDay = (index: number) => {
    onChange(itinerary.filter((_, i) => i !== index));
  };

  const updateDay = (index: number, field: keyof ItineraryDay, value: any) => {
    const updated = [...itinerary];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  const addActivity = (dayIndex: number) => {
    const updated = [...itinerary];
    updated[dayIndex].activities.push("");
    onChange(updated);
  };

  const removeActivity = (dayIndex: number, activityIndex: number) => {
    const updated = [...itinerary];
    updated[dayIndex].activities = updated[dayIndex].activities.filter((_, i) => i !== activityIndex);
    onChange(updated);
  };

  const updateActivity = (dayIndex: number, activityIndex: number, value: string) => {
    const updated = [...itinerary];
    updated[dayIndex].activities[activityIndex] = value;
    onChange(updated);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label className="text-lg font-semibold">Sample Itinerary</Label>
        <Button type="button" onClick={addDay} size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Add Day
        </Button>
      </div>

      {itinerary.map((day, dayIndex) => (
        <Card key={dayIndex} className="p-4">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <GripVertical className="w-5 h-5 text-muted-foreground mt-2" />
              <div className="flex-1 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Day Label</Label>
                    <Input
                      value={day.day}
                      onChange={(e) => updateDay(dayIndex, "day", e.target.value)}
                      placeholder="Day 1"
                    />
                  </div>
                  <div>
                    <Label>Title</Label>
                    <Input
                      value={day.title}
                      onChange={(e) => updateDay(dayIndex, "title", e.target.value)}
                      placeholder="Arrival in Nairobi"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Label>Activities</Label>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => addActivity(dayIndex)}
                    >
                      <Plus className="w-3 h-3 mr-1" />
                      Add Activity
                    </Button>
                  </div>
                  {day.activities.map((activity, actIndex) => (
                    <div key={actIndex} className="flex gap-2 mb-2">
                      <Textarea
                        value={activity}
                        onChange={(e) => updateActivity(dayIndex, actIndex, e.target.value)}
                        placeholder="Activity description"
                        rows={2}
                        className="flex-1"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => removeActivity(dayIndex, actIndex)}
                      >
                        <Trash className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => removeDay(dayIndex)}
              >
                <Trash className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      ))}

      {itinerary.length === 0 && (
        <Card className="p-8 text-center">
          <p className="text-muted-foreground mb-4">No itinerary days added yet</p>
          <Button type="button" onClick={addDay}>
            <Plus className="w-4 h-4 mr-2" />
            Add First Day
          </Button>
        </Card>
      )}
    </div>
  );
};
