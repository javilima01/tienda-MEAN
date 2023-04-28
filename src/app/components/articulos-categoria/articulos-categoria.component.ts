import { Component, OnInit } from '@angular/core';
import { articulos } from 'src/app/models/articulos.model';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ArticulosService } from 'src/app/services/articulos.service';

@Component({
  selector: 'app-articulos-categoria',
  templateUrl: './articulos-categoria.component.html',
  styleUrls: ['./articulos-categoria.component.css']
})
export class ArticulosCategoriaComponent implements OnInit {
  articulos?: articulos[];
  currentArticulos?: articulos;
  currentIndex = -1;
  nombre = '';
  currentImage = "";
  currentImagenes : String[] = [];
  scrollAnterior = false;
  filtros = true;
  categorias : String[] = [];

  constructor(
    private articulosService: ArticulosService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
      this.searchCategoria();
  }

  retrieveArticulos(): void {
    this.articulosService.getAll()
      .subscribe(
        data => {
          this.articulos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveArticulos();
    this.currentArticulos = undefined;
    this.currentIndex = -1;
  }

  setActiveArticulos(articulos: articulos, index: number): void {
    this.currentArticulos = articulos;
    this.currentIndex = index;
  }

  removeAllArticulos(): void {
    this.articulosService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }
  searchCategoria(): void {
    var categoria = this.route.snapshot.params['categoria'];
    var objeto = Object.create({});
    objeto.categoria = categoria;
    this.articulosService.findByFiltro(objeto)
      .subscribe(
        data => {
            this.articulos = data;
            if (data) {
              data.forEach(articulo => {
                console.log(articulo.sub_categoria);
                if (this.categorias.indexOf(articulo.sub_categoria!) == -1) {
                  this.categorias.push(articulo.sub_categoria!);
                  (<HTMLDivElement>document.getElementById("filtros")).style.gridTemplateColumns += "10%"; 
                }
              });
            }
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  searchSubcategory(id: any) {
    var categoria = this.route.snapshot.params['categoria'];
    if (id != 0) {
      var objeto = Object.create({});
      objeto.categoria = categoria;
      objeto.sub_categoria = this.categorias[id-1];
    } else {
      var objeto = Object.create({});
      objeto.categoria = categoria;
    }
    this.articulosService.findByFiltro(objeto)
      .subscribe(
        data => {
            this.articulos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
    var id_segundo = 0;
    Array.from(document.getElementsByClassName("filtros-a")).forEach(elemento => {
      console.log((<HTMLAnchorElement>elemento).id);
      if (id_segundo == id) {
        (<HTMLDivElement>document.getElementById("border-filtro"+String(id_segundo))).style.display = "block";
        (<HTMLAnchorElement>elemento).style.fontWeight = "bold";
      } else {
        (<HTMLDivElement>document.getElementById("border-filtro"+String(id_segundo))).style.display = "none";
        (<HTMLAnchorElement>elemento).style.fontWeight = "normal";
      }
      id_segundo += 1
    });
    
  }
}