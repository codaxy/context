/* Sample
{
    "url": "https://api.github.com/repos/codaxy/cxjs/issues/573",
"repository_url": "https://api.github.com/repos/codaxy/cxjs",
"labels_url": "https://api.github.com/repos/codaxy/cxjs/issues/573/labels{/name}",
"comments_url": "https://api.github.com/repos/codaxy/cxjs/issues/573/comments",
"events_url": "https://api.github.com/repos/codaxy/cxjs/issues/573/events",
"html_url": "https://github.com/codaxy/cxjs/issues/573",
"id": 509085530,
"node_id": "MDU6SXNzdWU1MDkwODU1MzA=",
"number": 573,
"title": "Grid - vertical lines mismatch",
"user": {
  "login": "JoRomcevicS",
  "id": 35691229,
  "node_id": "MDQ6VXNlcjM1NjkxMjI5",
  "avatar_url": "https://avatars3.githubusercontent.com/u/35691229?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/JoRomcevicS",
  "html_url": "https://github.com/JoRomcevicS",
  "followers_url": "https://api.github.com/users/JoRomcevicS/followers",
  "following_url": "https://api.github.com/users/JoRomcevicS/following{/other_user}",
  "gists_url": "https://api.github.com/users/JoRomcevicS/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/JoRomcevicS/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/JoRomcevicS/subscriptions",
  "organizations_url": "https://api.github.com/users/JoRomcevicS/orgs",
  "repos_url": "https://api.github.com/users/JoRomcevicS/repos",
  "events_url": "https://api.github.com/users/JoRomcevicS/events{/privacy}",
  "received_events_url": "https://api.github.com/users/JoRomcevicS/received_events",
  "type": "User",
  "site_admin": false
},
"labels": [

],
"state": "open",
"locked": false,
"assignee": null,
"assignees": [

],
"milestone": null,
"comments": 0,
"created_at": "2019-10-18T13:36:07Z",
"updated_at": "2019-10-18T13:36:50Z",
"closed_at": null,
"author_association": "NONE",
"body": "Vertical line in grid header and grid body is mismatched.  ##\r\n\r\n![Vertical lines 1](https://user-images.githubusercontent.com/35691229/67098520-a7a0f500-f1bc-11e9-9354-cdbd06dee497.PNG)\r\n![vertical line2](https://user-images.githubusercontent.com/35691229/67098535-abcd1280-f1bc-11e9-84e0-2c9ed98dd5c7.PNG)\r\n\r\n\r\n"
},

*/

interface Issue {
    id: number;
    title: string;
    number: number;
    user: {
        login: string;
        id: number;
    };
    state: string;
    created_at: string;
    closed_at: string;
    body: string;
}

export async function fetchGHIssues(): Promise<Issue[]> {
    let data = await fetch('https://api.github.com/repos/codaxy/cxjs/issues').then(x => x.json());
    return data;
}
