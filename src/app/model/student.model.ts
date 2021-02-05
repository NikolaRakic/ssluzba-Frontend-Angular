export class Student implements StudentInterface{
	public idKorisnik: Number;
	public adresa: String;
	public email: String;
	public ime: String;
	public pass: String;
	public prezime: String;
	public rodjendan: String;
	public username: String;
	public uloga: String;
	public brojIndeksa: String;
	public godinaStudija: Number;
	public smerStudenta: String;
		
	constructor(studentCfg: StudentInterface)
	{	
		this.idKorisnik = studentCfg.idKorisnik;
        this.adresa = studentCfg.adresa;
        this.email = studentCfg.email;
        this.ime = studentCfg.ime;
        this.pass = studentCfg.pass;
        this.prezime = studentCfg.prezime;
        this.rodjendan = studentCfg.rodjendan;
        this.username = studentCfg.username;
        this.uloga = studentCfg.uloga;
        this.brojIndeksa = studentCfg.brojIndeksa;
        this.godinaStudija = studentCfg.godinaStudija;
        this.smerStudenta = studentCfg.smerStudenta;
	}
}



interface StudentInterface {
	 idKorisnik: Number;
	 adresa: String;
	 email: String;
	 ime: String;
	 pass: String;
	 prezime: String;
	 rodjendan: String;
	 username: String;
	 uloga: String;
	 brojIndeksa: String;
	 godinaStudija: Number;
	 smerStudenta: String;
}