import { Status, Difficulty, Priority } from "@/features/ehafal/types/enums";

export interface TableData {
    id: string;
    target: string;
    scope: string;
    status: Status;
    progress: string;
    startTime: string;
    duration: string;
    difficulty: Difficulty;
    priority: Priority;
}

export interface Column {
    id: string;
    label: string;
    width: string;
}

export interface EHafalTableProps {
    data: TableData[];
    columns: Column[];
}

export interface HeaderRowProps {
    columns: Column[];
}

export interface FormattedProgress {
    value: string;
    color: string;
}

export interface FormattedBadge {
    value: string;
    color: string;
}

export interface FormattedDuration {
    days?: { value: number };
    hours?: { value: number };
    minutes: { value: number };
}

export interface DurationCellProps {
    duration: FormattedDuration;
    width: string;
}

export interface TableRowProps {
    row: TableData;
    columns: Column[];
    index: number;
    onAnimationStart: (index: number) => void;
}

export interface DataTableAnimationOptions {
    soundUrl?: string;
    volume?: number;
    pitch?: number;
    delay?: number;
}

export interface ProgressBarProps {
    value: number;
    color: string;
    stripeDensity?: number;
    stripeThickness?: number;
    animationSpeed?: number;
}

export interface CellProps {
    value: string;
    width: string;
}

export interface ProgressCellProps {
    progress: FormattedProgress;
    width: string;
}

export interface BadgeCellProps {
    badge: FormattedBadge;
    width: string;
}

export interface BadgeProps {
    value: string;
    color: string;
}

export interface HeaderCellProps {
    width?: string;
}

export interface StripedBackgroundProps {
    $color: string;
    $stripeDensity: number;
    $stripeThickness: number;
}