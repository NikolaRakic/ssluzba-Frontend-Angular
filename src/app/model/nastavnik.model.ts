export class Nastavnik implements NastavnikInterface{
    public idKorisnik: Number;
    public uloga: String;
	public adresa: String;
	public email: String;
	public ime: String;
	public pass: String;
	public prezime: String;
	public rodjendan: String;
	public username: String;
	public idNastavnik: String;
	public ulogaNastavnik: String;

		
	constructor(studentCfg: NastavnikInterface)
	{	
        this.idKorisnik = studentCfg.idKorisnik;
        this.uloga = studentCfg.uloga;
        this.adresa = studentCfg.adresa;
        this.email = studentCfg.email;
        this.ime = studentCfg.ime;
        this.pass = studentCfg.pass;
        this.prezime = studentCfg.prezime;
        this.rodjendan = studentCfg.rodjendan;
        this.username = studentCfg.username;
        this.ulogaNastavnik = studentCfg.ulogaNastavnik;
        this.idNastavnik = studentCfg.idNastavnik;
       
	}
}



interface NastavnikInterface {
     idKorisnik: Number;
     uloga: String;
	 adresa: String;
	 email: String;
	 ime: String;
	 pass: String;
	 prezime: String;
	 rodjendan: String;
	 username: String;
	 ulogaNastavnik: String;
	 idNastavnik: String;
}