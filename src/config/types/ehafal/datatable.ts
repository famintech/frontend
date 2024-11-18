export interface EHafalData {
    id: string;
    target: string;
    scope: string;
    status: string;
    progress: string;
    startTime: string;
    duration: string;
    difficulty: string;
    priority: string;
}

export interface EHafalColumn {
    id: string;
    label: string;
    width: string;
}

export interface EHafalDatatableProps {
    data: EHafalData[];
    columns: EHafalColumn[];
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