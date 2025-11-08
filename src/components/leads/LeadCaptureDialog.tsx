// src/components/leads/LeadCaptureDialog.tsx
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { LeadCaptureForm } from "./LeadCaptureForm"; // This component must exist and handle form fields

interface LeadCaptureDialogProps {
  // Props for manual button triggering (optional when used for auto-open)
  buttonText?: string;
  buttonVariant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  buttonSize?: "default" | "sm" | "lg" | "icon";
  buttonClassName?: string;
  buttonIcon?: React.ReactNode;

  formType: "register" | "apply" | "bookCall" | "infoSession" | "contact";
  title?: string;
  description?: string;
  extraData?: Record<string, any>;
  defaultMessage?: string;

  // New props for programmatic control from a parent component
  isOpen?: boolean; // Controls the dialog's open state externally
  onOpenChange?: (open: boolean) => void; // Callback to update external open state
  onSuccess?: () => void; // Callback to be executed on successful form submission
}

export function LeadCaptureDialog({
  buttonText,
  buttonVariant  = "default" ,
  buttonSize = "default",
  buttonClassName = "",
  buttonIcon,
  formType,
  title,
  description,
  extraData,
  defaultMessage,
  isOpen, // Destructure the new isOpen prop
  onOpenChange, // Destructure the new onOpenChange prop
  onSuccess, // Destructure the onSuccess prop
}: LeadCaptureDialogProps) {
  // Use internal state if isOpen and onOpenChange are not provided (for button-triggered usage)
  const [internalOpen, setInternalOpen] = React.useState(false);

  // Determine which 'open' state to use: controlled (from parent) or internal
  const controlledOpen = typeof isOpen === "boolean" ? isOpen : internalOpen;
  // Determine which 'setOpen' function to use: parent's callback or internal setter
  const setOpen =
    typeof onOpenChange === "function" ? onOpenChange : setInternalOpen;

  // Close the dialog and execute external success callback after successful form submission
  const handleSuccess = () => {
    setOpen(false); // Close dialog
    if (onSuccess) {
      onSuccess(); // Execute parent's success callback (e.g., navigate to thank you page)
    }
  };

  // Title mapping based on form type if not provided
  const getDefaultTitle = () => {
    switch (formType) {
      case "register":
        return "Register Your Interest";
      case "apply":
        return "Apply for Next Batch";
      case "bookCall":
        return "Schedule a Free Consultation";
      case "infoSession":
        return "Register for Info Session";
      case "contact":
        return "Contact Us";
      default:
        return "Contact Us";
    }
  };

  // Description mapping based on form type if not provided
  const getDefaultDescription = () => {
    switch (formType) {
      case "register":
        return "Fill out this form to register your interest in our program. Our team will reach out with more details.";
      case "apply":
        return "Submit your application for our next batch and take advantage of the exclusive 20% early bird discount.";
      case "bookCall":
        return "Schedule a free consultation with our program advisors to learn more about how our program can help you achieve your career goals.";
      case "infoSession":
        return "Register for our upcoming virtual info session on May 20, 2025 at 6:00 PM IST to learn more about our program.";
      case "contact":
        return "We'd love to hear from you. Fill out this form and we'll get back to you as soon as possible.";
      default:
        return "We'd love to hear from you. Fill out this form and we'll get back to you as soon as possible.";
    }
  };

  return (
    <Dialog open={controlledOpen} onOpenChange={setOpen}>
      {/* Conditionally render DialogTrigger: only if buttonText is provided */}
      {buttonText && (
        <DialogTrigger asChild>
          <Button
            variant={buttonVariant}
            size={buttonSize}
            className={`group ${buttonClassName}`}
          >
            {buttonText}
            {buttonIcon}
          </Button>
        </DialogTrigger>
      )}
      <DialogContent className="sm:max-w-md max-h-[80vh] md:max-h-[90vh] overflow-hidden">
        <DialogHeader className="pb-2">
          <DialogTitle>{title || getDefaultTitle()}</DialogTitle>
          <DialogDescription>
            {description || getDefaultDescription()}
          </DialogDescription>
        </DialogHeader>
        <div className="overflow-y-auto pr-2 max-h-[calc(80vh-10rem)] md:max-h-[calc(90vh-10rem)]">
          <LeadCaptureForm
            formType={formType}
            onSuccess={handleSuccess} // Pass the dialog's handleSuccess
            onCancel={() => setOpen(false)}
            extraData={extraData}
            defaultMessage={defaultMessage}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
