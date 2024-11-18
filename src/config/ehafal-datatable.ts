export interface EHafalColumn {
    id: string;
    label: string;
    width: string;
}

export const columns: EHafalColumn[] = [
    { id: 'id', label: 'ID', width: '8%' },
    { id: 'target', label: 'Target', width: '25%' },
    { id: 'scope', label: 'Scope', width: '9%' },
    { id: 'status', label: 'Status', width: '8%' },
    { id: 'progress', label: 'Progress', width: '7%' },
    { id: 'startTime', label: 'Started', width: '12%' },
    { id: 'duration', label: 'Duration', width: '18%' },
    { id: 'difficulty', label: 'Difficulty', width: '6%' },
    { id: 'priority', label: 'Priority', width: '6%' },
];

