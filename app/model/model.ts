export interface Issue {
    id: string;
    name: string;
    code: string;
    type: 'task' | 'epic' | 'story';
    reporter: string;
    reportTime: number;
    assignedTo?: string;
    assignedTime?: number;
}
