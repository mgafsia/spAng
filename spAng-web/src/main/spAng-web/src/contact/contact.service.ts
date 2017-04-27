import {Injectable} from "@angular/core";

@Injectable()
export class ContactService {
    sendSupportMessage(form: any) {
      console.log("On Contact Services : ")
      console.log(form)
    }
}
