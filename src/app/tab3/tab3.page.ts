import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';





@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  contactlist = [
    { id: 1, name: 'Arc Noliuga', email: 'noliugaaa@gmail.com', number: '0999292932' },


  ]




  constructor(public alertController: AlertController) {
  }
  async confirmation(index: number) {
    const alert = await this.alertController.create({
      header: 'Are You Sure You Want Toi Delete?',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            this.contactlist.splice(index, 1);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ],
    });

    await alert.present();
  }
  async addUser() {
    let prompt = await this.alertController.create({
      header: 'Add Contact',
      inputs: [
        {
          name: 'name',
          placeholder: 'name',
        }, {
          name: 'email',
          placeholder: 'email'
        },
        {
          name: 'number',
          placeholder: 'number'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: (data) => {
            console.log('Saved clicked');

            this.contactlist.push({
              id: data.id,
              name: data.name,
              email: data.email,
              number: data.number
            });

          }
        }
      ]
    });
    await prompt.present();

  }


}