import {
  User,
  Utensils,
  Flower2,
  Dumbbell,
  LifeBuoy,
  Users,
  type LucideIcon,
  Building
} from 'lucide-react';

// Base icon wrapper for consistent styling
export const IconWrapper = ({ Icon, className = "" }: { Icon: LucideIcon, className?: string }) => (
  <div className={`inline-flex ${className}`}>
    <Icon 
      size={className?.includes('w-') ? undefined : className?.includes('mx-auto') ? 48 : 24}
      strokeWidth={1.5} 
      className="text-accent" 
    />
  </div>
);

export const PersonIcon = () => (
  <IconWrapper Icon={User} />
);

export const NutritionIcon = () => (
  <IconWrapper Icon={Utensils} />
);

export const MeditationIcon = () => (
  <IconWrapper Icon={Flower2} />
);

export const FitnessIcon = () => (
  <IconWrapper Icon={Dumbbell} />
);

export const LifestyleIcon = () => (
  <IconWrapper Icon={LifeBuoy} />
);

export const GroupIcon = () => (
  <IconWrapper Icon={Users} />
);

export const BuildingIcon = () => (
  <IconWrapper Icon={Building} />
);

// Export all icons as a collection if needed
export const Icons = {
  Person: PersonIcon,
  Nutrition: NutritionIcon,
  Meditation: MeditationIcon,
  Fitness: FitnessIcon,
  Lifestyle: LifestyleIcon,
  Group: GroupIcon,
  Building: BuildingIcon,
}; 