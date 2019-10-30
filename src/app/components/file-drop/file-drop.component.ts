import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-file-drop',
  templateUrl: './file-drop.component.html',
  styleUrls: ['./file-drop.component.css']
})
export class FileDropComponent implements OnInit {

  constructor(private  httpClient: HttpClient) {}

  loading: boolean;
  guid: string;
  wellname: string;
  depth: string;
  uwi: string;
  path: string;
  @Output() refreshToken$ = new BehaviorSubject(undefined);

  public files: NgxFileDropEntry[] = [];

  ngOnInit() {
  }

  public dropped(files: NgxFileDropEntry[]) {

    this.files = files;

    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        this.loading = true;
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          this.path = droppedFile.relativePath;

          const formData = new FormData()
          formData.append('image', file, droppedFile.relativePath)

          const headers = new HttpHeaders({
          });

          this.httpClient.post('https://rockbotwebapi.azurewebsites.net/api/upload', formData, { headers, responseType: 'text' })
          .subscribe(data => {
            // Sanitized logo returned from backend
            this.guid = data.substring(1, data.length - 1);
            this.parseFilename(droppedFile.relativePath);
            this.loading = false;
            this.refreshToken$.next('refresh');
          });


        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
      }

    }
  }
 
  public fileOver(event){

  }
 
  public fileLeave(event){

  }

  private parseFilename(str: string) {

    const arr = str.split('_');
    if (arr.length > 0) {
      this.depth = arr[0].replace('p00', '');
    }
    if (arr.length > 1) {
      this.wellname = arr[1];
    }
    if (arr.length > 2) {
      this.uwi = arr[2];
    }

    const postBody = {
      Guid: this.guid,
      WellName: this.wellname,
      Depth: this.depth,
      UWI: this.uwi,
      ThinSectionPath: this.path,
      Status: 'Waiting'
    };

    const headers = new HttpHeaders({
    });

    this.httpClient.post('https://rockbotwebapi.azurewebsites.net/api/thinsections', postBody, { headers, responseType: 'text' })
    .subscribe(data => {
      console.log(data);
    });

  }

}
