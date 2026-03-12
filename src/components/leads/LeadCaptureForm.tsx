import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useToast } from "../../hooks/use-toast";
import { Loader2, Monitor, MapPin } from "lucide-react";

// Form schema with validation
const leadFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  // email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  source: z.string().min(1, { message: "Please select how you found us" }),
  interestedIn: z.string().min(1, { message: "Please select an option" }),
  mode: z.enum(["online", "offline"]).optional(),
  message: z.string().optional(),
});

type LeadFormValues = z.infer<typeof leadFormSchema>;

interface LeadCaptureFormProps {
  formType: "register" | "apply" | "bookCall" | "infoSession" | "contact";
  onSuccess?: () => void;
  onCancel?: () => void;
  extraData?: Record<string, any>; // Additional data like batch information
  defaultMessage?: string;
  defaultInterestedIn?: string;
  defaultMode?: "online" | "offline";
  showModeSelector?: boolean;
}

export function LeadCaptureForm({
  formType,
  onSuccess,
  onCancel,
  extraData,
  defaultMessage,
  defaultInterestedIn,
  defaultMode,
  showModeSelector = false,
}: LeadCaptureFormProps) {
  const { toast } = useToast();

  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: "",
      // email: "",
      phone: "",
      source: "Website",
      interestedIn: defaultInterestedIn || "",
      mode: defaultMode || undefined,
      message: defaultMessage || "",
    },
  });

  const isSubmitting = form.formState.isSubmitting;

  // Get form title and button text based on form type and extraData
  const getFormConfig = () => {
    switch (formType) {
      case "register":
        // If batch info is available, customize the form title and note
        if (extraData?.batchId && extraData?.batchName) {
          return {
            title: `Register for ${extraData.batchName}`,
            buttonText: "Register Now",
            noteText: `Secure your spot in this batch starting ${
              extraData.batchStartDate
                ? new Date(extraData.batchStartDate).toLocaleDateString(
                    "en-US",
                    { year: "numeric", month: "long", day: "numeric" }
                  )
                : "soon"
            }`,
          };
        }
        return {
          title: "Register Your Interest",
          buttonText: "Register Now",
          noteText: "Secure your spot in our first batch",
        };
      case "apply":
        return {
          title: "Apply for Next Batch",
          buttonText: "Submit Application",
          noteText: "Limited seats available with 20% early bird discount",
        };
      case "bookCall":
        return {
          title: "Schedule a Free Consultation",
          buttonText: "Book Your Call",
          noteText: "Our team will contact you to confirm the time",
        };
      case "infoSession":
        return {
          title: "Register for Info Session",
          buttonText: "Confirm Registration",
          noteText: "May 20, 2025 at 6:00 PM IST - Virtual Session",
        };
      case "contact":
        return {
          title: "Contact Us",
          buttonText: "Submit",
          noteText: "We'll get back to you shortly",
        };
      default:
        return {
          title: "Contact Us",
          buttonText: "Submit",
          noteText: "We'll get back to you shortly",
        };
    }
  };

  const { title, buttonText } = getFormConfig();

  const onSubmit = async (data: LeadFormValues) => {
    try {
      // Build payload for the external enquiry API
      const enquiryData = {
        source: "ignitelabs",
        name: data.name,
        phone: data.phone,
        interestedIn: data.interestedIn,
        message: data.message || null,
        formType,
        extraData: { ...(extraData || {}), ...(data.mode ? { mode: data.mode } : {}) },
      };

      // Send to Invoice App external enquiry endpoint (public, no auth needed)
      const apiBaseUrl = import.meta.env.VITE_ENQUIRY_API_URL || '';
      const response = await fetch(`${apiBaseUrl}/external/enquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(enquiryData),
      });

      if (response.ok) {
        // Reset form
        form.reset();
        
        // Call success callback (dialog will show success modal)
        if (onSuccess) {
          onSuccess();
        }
      } else {
        throw new Error("Failed to submit your information");
      }
    } catch (error) {
      console.error("Error submitting lead:", error);
      toast({
        title: "Something went wrong",
        description:
          "Failed to submit your information. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="w-full mx-auto p-2 pt-0">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your full name"
                    {...field}
                    className="h-10 text-gray-900 placeholder:text-gray-400 border-gray-300 focus:border-blue-500"
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">
                  Phone Number
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your phone number"
                    {...field}
                    className="h-10 text-gray-900 placeholder:text-gray-400 border-gray-300 focus:border-blue-500"
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="interestedIn"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">
                  I'm interested in
                </FormLabel>
                <FormControl>
                  <select
                    {...field}
                    className="flex h-10 w-full items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 ring-offset-background focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="" disabled className="text-gray-400">Select an option</option>
                    <option value="final_year_project">Final Year Project Training</option>
                    <option value="training">Training Program</option>
                    <option value="internship">Internship Opportunity</option>
                    <option value="certification">Webinar Registration</option>
                    <option value="placement">Placement Assistance</option>
                    <option value="fee_details">Fee Structure</option>
                    <option value="general_info">General Inquiry</option>
                    <option value="ai_ml_career_demo">AI & Machine Learning Career Demo</option>
                  </select>
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          {showModeSelector && (
            <FormField
              control={form.control}
              name="mode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    Preferred Mode
                  </FormLabel>
                  <FormControl>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => field.onChange("offline")}
                        className={`flex items-center justify-center gap-2 rounded-lg border-2 px-3 py-2.5 text-sm font-semibold transition-all duration-200 ${
                          field.value === "offline"
                            ? "border-blue-600 bg-blue-50 text-blue-700 shadow-sm"
                            : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                        }`}
                      >
                        <MapPin className="h-4 w-4" />
                        Offline
                      </button>
                      <button
                        type="button"
                        onClick={() => field.onChange("online")}
                        className={`flex items-center justify-center gap-2 rounded-lg border-2 px-3 py-2.5 text-sm font-semibold transition-all duration-200 ${
                          field.value === "online"
                            ? "border-green-600 bg-green-50 text-green-700 shadow-sm"
                            : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                        }`}
                      >
                        <Monitor className="h-4 w-4" />
                        Online
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          )}

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">
                  Message (Optional)
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Any specific questions or comments?"
                    {...field}
                    className="h-10 text-gray-900 placeholder:text-gray-400 border-gray-300 focus:border-blue-500"
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <div className="flex gap-2 pt-2">
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-md hover:shadow-lg transition-all duration-300 font-bold h-11"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                buttonText
              )}
            </Button>
            {onCancel && (
              <Button
                type="button"
                variant="outline"
                onClick={onCancel}
                className="flex-shrink-0 border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </Button>
            )}
          </div>
          <p className="text-center text-xs text-gray-400 mt-3">
            By submitting, you agree to our{" "}
            <span className="text-blue-600 hover:underline cursor-pointer">
              Privacy Policy
            </span>
          </p>
        </form>
      </Form>
    </div>
  );
}
