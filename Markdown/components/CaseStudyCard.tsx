import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CaseStudyCardProps {
  title: string;
  description: string;
  metrics: {
    label: string;
    value: string;
  }[];
  tags: string[];
  imageUrl: string;
  testimonial?: {
    text: string;
    author: string;
    role: string;
  };
}

export function CaseStudyCard({
  title,
  description,
  metrics,
  tags,
  imageUrl,
  testimonial,
}: CaseStudyCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="space-y-1">
                <p className="text-sm text-muted-foreground">{metric.label}</p>
                <p className="text-2xl font-bold text-primary">{metric.value}</p>
              </div>
            ))}
          </div>
          {testimonial && (
            <blockquote className="border-l-2 border-primary pl-4">
              <p className="italic text-muted-foreground">"{testimonial.text}"</p>
              <footer className="mt-2">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </footer>
            </blockquote>
          )}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <Button className="w-full gap-2">
            Посмотреть кейс
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}