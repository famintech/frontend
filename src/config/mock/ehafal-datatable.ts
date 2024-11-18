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

export const mockData: EHafalData[] = [
    {
        id: 'MEM-001',
        target: 'Surah Al-Fatiha',
        scope: 'Verse 1-7',
        status: 'In Progress',
        progress: '75%',
        startTime: '2024-03-15 08:00',
        duration: '3d 5h',
        difficulty: 'Medium',
        priority: 'High',
    },
    {
        id: 'MEM-002',
        target: 'Surah Al-Ikhlas',
        scope: 'Full',
        status: 'Completed',
        progress: '100%',
        startTime: '2024-03-10 14:30',
        duration: '8d 2h',
        difficulty: 'Easy',
        priority: 'Medium',
    },
    {
        id: 'MEM-003',
        target: 'Surah Al-Falaq',
        scope: 'Verse 1-3',
        status: 'Pending',
        progress: '0%',
        startTime: '2024-03-18 10:00',
        duration: '5h',
        difficulty: 'Hard',
        priority: 'High',
    },
    {
        id: 'MEM-004',
        target: 'Surah Al-Kahfi',
        scope: 'Verse 1-3',
        status: 'Pending',
        progress: '45%',
        startTime: '2024-03-18 10:00',
        duration: '5h',
        difficulty: 'Hard',
        priority: 'High',
    },
    {
        id: 'MEM-005',
        target: 'Surah Al-Kahfi',
        scope: 'Verse 1-10',
        status: 'Pending',
        progress: '2.5%',
        startTime: '2024-03-18 10:00',
        duration: '5h',
        difficulty: 'Hard',
        priority: 'High',
    }
];