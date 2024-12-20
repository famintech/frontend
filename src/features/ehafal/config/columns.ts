import { Column } from '@/features/ehafal/types/table';

export const columns: Column[] = [
    { id: 'id', label: 'ID', width: '8%' },
    { id: 'target', label: 'Target', width: '25%' },
    { id: 'scope', label: 'Scope', width: '9%' },
    { id: 'status', label: 'Status', width: '8%' },
    { id: 'progress', label: 'Progress', width: '7%' },
    { id: 'startTime', label: 'Started', width: '12%' },
    { id: 'duration', label: 'Duration', width: '18%' },
    // { id: 'difficulty', label: 'Difficulty', width: '6%' },
    { id: 'actions', label: 'Actions', width: '6%' },
    { id: 'priority', label: 'Priority', width: '6%' },
];