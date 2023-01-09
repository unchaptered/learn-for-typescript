function getFormatedFolder(folderName: string) {
    // '1. Docker Core'
    // [ '1. ', 'Docker Core' ]
    const splitedFolder = folderName.split('_');

    // 'Docker Core'
    const [number, ...formatedFolder] = splitedFolder;

    return formatedFolder.join(' ')
}
export function convertMarkdownFile(folderMap: Map<string, string[]>): string {
    let markdown = `
# learn-for-typescript

learning for typescript from 2023-01-09
    
Other projects
    
- [unchaptered/learn-for-python](https://github.com/unchaptered/learn-for-python)
- [unchaptered/learn-for-typescript](https://github.com/unchaptered/learn-for-typescript)

## Chapters

`;

    const BASE_URL = 'https://github.com/unchaptered/docker-and-kubernetes/tree/main/';

    const folderEntries = [...folderMap].sort();
    // console.log(folderEntries);
    for (let idx = 0; idx < folderEntries.length; idx ++) {

        // '1. Docker Core'
        const [ topFolder, secFolderList ] = folderEntries[idx];

        markdown += `${idx + 1}. [${getFormatedFolder(topFolder)}](${encodeURI(BASE_URL + topFolder)})\n`;
        for (let jdx = 0; jdx < secFolderList.length; jdx++) {
            markdown += `   ${jdx + 1}. [${getFormatedFolder(secFolderList[jdx])}](${encodeURI(BASE_URL + topFolder + '/' + secFolderList[jdx])})\n`;
        }

    }

    return markdown;
}
