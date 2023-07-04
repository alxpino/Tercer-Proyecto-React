class Contact {
    name = '';
    phone ='00000000';
    mail = 'example@gmail.com' ;
    connected = false;

    constructor(name, phone, mail, connected){
        this.name = name;
        this.phone = phone;
        this.mail = mail;
        this.connected = connected;
    }
}
export default Contact;
