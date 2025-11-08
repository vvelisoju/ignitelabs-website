import React from "react";
import { Card, CardContent } from "../../components/ui/card";

export default function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="h-full hover:border-primary hover:shadow-md transition-all duration-300 hover-lift group relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/40 via-primary to-primary/40 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>

      <CardContent className="pt-6 relative z-10">
        <div className="mb-4 bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:bg-primary/15 transition-all duration-300 group-hover:-translate-y-1">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 text-primary group-hover:text-gradient transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground">{description}</p>

        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </CardContent>

      <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-orange-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </Card>
  );
}