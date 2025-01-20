import { Button } from "@/components/ui/button";

const categories = [
  "Все",
  "Корпоративные сайты",
  "E-commerce",
  "SEO",
  "Мобильные приложения",
  "Редизайн",
];

interface CaseStudyFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CaseStudyFilter({
  activeCategory,
  onCategoryChange,
}: CaseStudyFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className="transition-all duration-300"
        >
          {category}
        </Button>
      ))}
    </div>
  );
}