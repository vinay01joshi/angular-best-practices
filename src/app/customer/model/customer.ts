export class Customer {
    constructor(
        public firstname = '',
        public lastname= '',
        public email = '',
        public sendCatalog = false,
        public addressType = 'home',
        public street1?:string,
        public street2?:string,
        public city?:string,
        public state = '',
        public zip?:string
        ){ }
}