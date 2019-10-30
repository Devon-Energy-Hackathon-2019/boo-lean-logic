export interface IFileEvent {
    eventtype: FileEventType
    filepath: string
}

export enum FileEventType {
    fileupload = 0,
    filecreate = 1
}