/**
* @author Adarsh Pratap Singh
* @date   20/01/2025
* @description This is a LWC component which is used to refresh the page in flow.
*/

import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class RedirectRefreshPage extends NavigationMixin(LightningElement) {
    @api recordId; // This ID will be passed from the Flow

    connectedCallback() {
        console.log('Navigating to record page with ID:', this.recordId);

        if (this.recordId) {
            // Delay ensures the Flow screen fully loads before navigating
            setTimeout(() => {
                this[NavigationMixin.Navigate]({
                    type: 'standard__recordPage',
                    attributes: {
                        recordId: this.recordId,
                        actionName: 'view'
                    }
                });
            }, 500); // Short delay to ensure Flow execution is complete
        } else {
            console.error('No Record Id provided, cannot navigate.');
        }
    }

    disconnectedCallback() {
        window.location.reload();
        console.log('RefreshPageInFlow component destroyed.');
    }
}
