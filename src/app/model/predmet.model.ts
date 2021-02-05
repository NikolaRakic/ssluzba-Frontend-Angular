export class Predmet implements PredmetInterface{
	public idPredmetNaSmeru: Number;
	public godinaPojavljivanjaPredmetaNaSmeru: Number;
	public obrisanPredmetNaSmeru: Boolean;
	//
	public idPredmet: Number;
	public nazivPredmeta: String;
	public obrisanPredmet: Boolean;
	//
	public idSmer: Number;
	public nazivSmera: String;
	public trajanjeSmera: Number;
	public obrisanSmer: Boolean;
		
	constructor(predmetCfg: PredmetInterface)
	{	
		this.idPredmetNaSmeru = predmetCfg.idPredmetNaSmeru;
        this.godinaPojavljivanjaPredmetaNaSmeru = predmetCfg.godinaPojavljivanjaPredmetaNaSmeru;
        this.obrisanPredmetNaSmeru = predmetCfg.obrisanPredmetNaSmeru;
        this.idPredmet = predmetCfg.idPredmet;
        this.nazivPredmeta = predmetCfg.nazivPredmeta;
        this.obrisanPredmet = predmetCfg.obrisanPredmet;
        this.idSmer = predmetCfg.idSmer;
        this.nazivSmera = predmetCfg.nazivSmera;
        this.trajanjeSmera = predmetCfg.trajanjeSmera;
        this.obrisanSmer = predmetCfg.obrisanSmer;
        
	}
}

interface PredmetInterface {
    idPredmetNaSmeru: Number;
    godinaPojavljivanjaPredmetaNaSmeru: Number;
    obrisanPredmetNaSmeru: Boolean;
    idPredmet: Number;
    nazivPredmeta: String;
    obrisanPredmet: Boolean;
    idSmer: Number;
    nazivSmera: String;
    trajanjeSmera: Number;
    obrisanSmer: Boolean;
	 
}