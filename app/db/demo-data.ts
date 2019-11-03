import { Issue } from './model';

/* Unused uuids. Remove as u use.

0acc0781-d1b6-42b1-9915-3fea2e033cf3
46ea0df1-f929-49da-a45a-3ed85b36bf7b
cffd13b3-c770-4620-b566-e0afd6de5a76
60a1499f-b963-4448-beda-86574079487d
75a75b06-19c6-4da3-9420-25fe2957a584
99b12dd8-191b-40c8-b7f2-4063b077daa9
18c2a05d-4e2f-4249-aee5-61c6632efb78
598fb57a-e601-437c-9f92-abdab3a4cc51
6b5104eb-1021-4a3f-ba75-fff20e9bb788
13030a70-715e-4e5c-907a-7a6d6ab5b1a4
02ac5a41-e8af-4fda-b38d-1cadb070d45f
e8b48371-9209-4dd2-adb3-0f78dc57f88c
e4844c36-d826-458c-996f-fcc7563a3ede
e87bc677-022e-4726-b6b6-60204ddc6ded
e7c6b33e-f006-4e59-b694-cf553813ce87
*/

export const issues: Issue[] = [
    {
        id: '2e7359f9-d015-4763-8c78-ebb6f3018c2c',
        code: '1',
        name: 'Widgets',
        type: 'epic',
        reporter: 'mstijak',
        reportTime: Date.parse('2019-11-2'),
        assignedTo: 'mstijak',
    },
    {
        id: '00ae1d11-4714-45f7-a664-459b24a189ca',
        code: '2',
        name: 'Documentation',
        type: 'epic',
        reporter: 'mstijak',
        reportTime: Date.parse('2019-11-2'),
    },
    {
        id: 'fc75a4de-1235-4925-b4b3-9d92e9cf75ca',
        code: '3',
        name: 'Demo Apps',
        type: 'epic',
        reporter: 'mstijak',
        reportTime: Date.parse('2019-11-2'),
    },
    {
        id: '8186f930-4006-4df9-a703-513a44a70527',
        code: '4',
        name: 'Document Restate',
        type: 'task',
        reporter: 'mstijak',
        reportTime: Date.parse('2019-11-3'),
        assignedTo: 'mstijak',
    },
    {
        id: '490160a6-ca91-4866-9e92-4f4d3fcfbe55',
        code: '5',
        name: 'Provide typings for hooks',
        type: 'task',
        reporter: 'mstijak',
        reportTime: Date.parse('2019-11-3'),
    },
];
