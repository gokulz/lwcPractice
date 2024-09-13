import { LightningElement, wire, track } from 'lwc';
import getAccountData from '@salesforce/apex/AccountController.getAccountData';

export default class DynamicRendering extends LightningElement {
 @track accounts //to store all the accounts
 @track filterAllAccounts = null; //to filter the particular accounts
    @wire(getAccountData)
    wiredAccountData({data, error}){
        if(data){
            this.accounts = data;
        } else if(error){
            console.error('Error while fetching accounts', error);
        }
    };
  handleFilter(){
    // Filter out accounts where the industry is 'Agriculture'
    this.filterAllAccounts = this.accounts.filter(account => account.Industry !== 'Agriculture');
  }
  
}