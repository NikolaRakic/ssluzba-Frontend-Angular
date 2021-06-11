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

	
	constructor(nastavnikCfg: NastavnikInterface)
	{	
        this.idKorisnik = nastavnikCfg.idKorisnik;
        this.uloga = nastavnikCfg.uloga;
        this.adresa = nastavnikCfg.adresa;
        this.email = nastavnikCfg.email;
        this.ime = nastavnikCfg.ime;
        this.pass = nastavnikCfg.pass;
        this.prezime = nastavnikCfg.prezime;
        this.rodjendan = nastavnikCfg.rodjendan;
        this.username = nastavnikCfg.username;
        this.ulogaNastavnik = nastavnikCfg.ulogaNastavnik;
        this.idNastavnik = nastavnikCfg.idNastavnik;
       
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