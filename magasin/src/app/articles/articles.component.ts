import { Component} from '@angular/core';
import { Article } from '../model/article.model';
import { ArticleService } from '../services/article.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  tab_art : Article[];
  zeroStyle = {'color':'red'};
  constructor(private articleService: ArticleService,public authServ : AuthService ) {
  this.tab_art = articleService.listeArticles();
}

ngOnInit(): void {
}
suppArticle(art: Article){
    let conf = confirm("Etes-vous sûr de vouloir supprimer cet article ?");
    if (conf) {
    this.articleService.supprimerArticle(art);
    console.log("Suppression avec succes :"+art.libelle);
    }
}
}

