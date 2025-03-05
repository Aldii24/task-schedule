"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Plus } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { createTask } from "@/actions/post.action";
import { toast } from "react-hot-toast";

const DialogTask = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("");
  const [dueDate, setDueDate] = useState<Date | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    if (isLoading) return;

    if (!title.trim() || !category.trim()) {
      toast.error("Title and category are required!");
      return;
    }

    try {
      setIsLoading(true);
      const task = await createTask(title, category, description, dueDate);

      if (task?.success) {
        toast.success("Task created successfully!");
        setCategory("");
        setTitle("");
        setDescription("");
        setDueDate(null);
        setOpen(false);
      }
    } catch (error) {
      toast.error("Failed to create task");
      console.log("Error to create task", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-indigo-500 hover:bg-indigo-600 text-white text-xs sm:text-base hover:text-white"
        >
          <Plus /> New Task
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">
            Create Task
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col space-y-2">
            <Label htmlFor="title" className="text-left">
              Title
            </Label>
            <Input
              value={title}
              className="col-span-3"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="description" className="text-left">
              Description
            </Label>
            <Textarea
              value={description}
              className="col-span-3"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="category" className="text-left">
              Category
            </Label>
            <Input
              value={category}
              placeholder="e.g. Work"
              className="col-span-3"
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="dueDate" className="text-left">
              Deadline
            </Label>
            <Input
              type="date"
              value={dueDate ? dueDate.toISOString().split("T")[0] : ""}
              onChange={(e) => setDueDate(new Date(e.target.value))}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" disabled={isLoading} onClick={handleSubmit}>
            {isLoading ? (
              <>
                <Loader2 className="mr-1 h-4 w-4 animate-spin" /> Creating...
              </>
            ) : (
              "Create"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogTask;
