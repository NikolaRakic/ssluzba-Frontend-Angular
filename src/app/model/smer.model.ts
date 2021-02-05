export class Smer implements SmerInterface{
	public id: number;
    public naziv: string;
    public trajanje: number;
		
	constructor(smerCfg: SmerInterface)
	{	
		this.id = smerCfg.id;
        this.naziv = smerCfg.naziv;
        this.trajanje = smerCfg.trajanje;
	}
}

interface SmerInterface {
	id?: number;
    naziv: string;
    trajanje: number;
}