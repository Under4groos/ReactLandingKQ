



interface _GitAssets{
    URL:string;
    VER:string;
    DownloadCount:string;
}

 


export class Git
{
    url:string;
    GitAssets:_GitAssets;

    // "https://api.github.com/repos/Under4groos/SmdCompile.View/releases"
    constructor(url:string){
        this.url = url;  
        this.GitAssets = { URL:"" , VER:"" , DownloadCount:"" };
        
    }
    Get(  Evnt:any  ){
        fetch(this.url)
        .then(response => response.json())
        .then(commits => {
            this.GitAssets = 
            { 
                URL:commits[0]["assets"][0]["browser_download_url"] , 
                VER:commits[0]["tag_name"],
                DownloadCount:commits[0]["assets"][0]["download_count"]
            
               
                
            };
            //console.log(this.ToString());
            Evnt( this.GitAssets);
        });
        
    }
    ToString(){
        let v = this.GitAssets;
        return v.DownloadCount + "\n" + v.VER  + "\n" + v.URL;
    }



};
export default Git;