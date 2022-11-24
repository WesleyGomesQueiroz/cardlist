import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  title = 'Paginação Angular';
  dadosAlunos: any;
  pag = 1;
  contador = 9;

  obj = [
    { produto: 'anel', valor: 1000, obs: 'cacilds', img: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1649065890' },
    { produto: 'relojo', valor: 32, obs: 'cacilds', img: 'https://files.tecnoblog.net/wp-content/uploads/2020/12/cyberpunk-2077-ps4-xbox-one-e1607556683533.jpg' },
    { produto: 'colulo', valor: 100, obs: 'cacilds', img: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1649065890' },
    { produto: 'Jóia', valor: 140, obs: 'cacilds', img: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1649065890' },
    { produto: 'pulsera', valor: 0.04, obs: 'cacilds', img: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1649065890' },
    { produto: 'anel', valor: 1000, obs: 'cacilds', img: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1649065890' },
    { produto: 'relojo', valor: 32, obs: 'cacilds', img: 'https://files.tecnoblog.net/wp-content/uploads/2020/12/cyberpunk-2077-ps4-xbox-one-e1607556683533.jpg' },
    { produto: 'colulo', valor: 100, obs: 'cacilds', img: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1649065890' },
    { produto: 'Jóia', valor: 140, obs: 'cacilds', img: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1649065890' },
    { produto: 'pulsera', valor: 0.04, obs: 'cacilds', img: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1649065890' },
    { produto: 'anel', valor: 1000, obs: 'cacilds', img: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1649065890' },
    { produto: 'relojo', valor: 32, obs: 'cacilds', img: 'https://files.tecnoblog.net/wp-content/uploads/2020/12/cyberpunk-2077-ps4-xbox-one-e1607556683533.jpg' },
    { produto: 'colulo', valor: 100, obs: 'cacilds', img: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1649065890' },
    { produto: 'Jóia', valor: 140, obs: 'cacilds', img: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1649065890' },
    { produto: 'pulsera', valor: 0.04, obs: 'cacilds', img: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1649065890' },
    { produto: 'anel', valor: 1000, obs: 'cacilds', img: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1649065890' },
    { produto: 'relojo', valor: 32, obs: 'cacilds', img: 'https://files.tecnoblog.net/wp-content/uploads/2020/12/cyberpunk-2077-ps4-xbox-one-e1607556683533.jpg' },
    { produto: 'colulo', valor: 100, obs: 'cacilds', img: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1649065890' },
    { produto: 'Jóia', valor: 140, obs: 'cacilds', img: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1649065890' },
    { produto: 'pulsera', valor: 0.04, obs: 'cacilds', img: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1649065890' },
    { produto: 'anel', valor: 1000, obs: 'cacilds', img: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1649065890' },
    { produto: 'relojo', valor: 32, obs: 'cacilds', img: 'https://files.tecnoblog.net/wp-content/uploads/2020/12/cyberpunk-2077-ps4-xbox-one-e1607556683533.jpg' },
    { produto: 'colulo', valor: 100, obs: 'cacilds', img: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1649065890' },
    { produto: 'Jóia', valor: 140, obs: 'cacilds', img: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1649065890' },
    { produto: 'pulsera', valor: 0.04, obs: 'cacilds', img: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1649065890' },
    { produto: 'anel', valor: 1000, obs: 'cacilds', img: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1649065890' },
    { produto: 'relojo', valor: 32, obs: 'cacilds', img: 'https://files.tecnoblog.net/wp-content/uploads/2020/12/cyberpunk-2077-ps4-xbox-one-e1607556683533.jpg' },
    { produto: 'colulo', valor: 100, obs: 'cacilds', img: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1649065890' },
    { produto: 'Jóia', valor: 140, obs: 'cacilds', img: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1649065890' },
    { produto: 'pulsera', valor: 0.04, obs: 'cacilds', img: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1649065890' },
    { produto: 'anel', valor: 1000, obs: 'cacilds', img: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1649065890' },
    { produto: 'relojo', valor: 32, obs: 'cacilds', img: 'https://files.tecnoblog.net/wp-content/uploads/2020/12/cyberpunk-2077-ps4-xbox-one-e1607556683533.jpg' },
    { produto: 'colulo', valor: 100, obs: 'cacilds', img: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1649065890' },
    { produto: 'Jóia', valor: 140, obs: 'cacilds', img: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1649065890' },
    { produto: 'pulsera', valor: 0.04, obs: 'cacilds', img: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1649065890' },
    { produto: 'anel', valor: 1000, obs: 'cacilds', img: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1649065890' },
    { produto: 'relojo', valor: 32, obs: 'cacilds', img: 'https://files.tecnoblog.net/wp-content/uploads/2020/12/cyberpunk-2077-ps4-xbox-one-e1607556683533.jpg' },
    { produto: 'colulo', valor: 100, obs: 'cacilds', img: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1649065890' },
    { produto: 'Jóia', valor: 140, obs: 'cacilds', img: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1649065890' },
    { produto: 'pulsera', valor: 0.04, obs: 'cacilds', img: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1649065890' },
    { produto: 'anel', valor: 1000, obs: 'cacilds', img: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1649065890' },
    { produto: 'relojo', valor: 32, obs: 'cacilds', img: 'https://files.tecnoblog.net/wp-content/uploads/2020/12/cyberpunk-2077-ps4-xbox-one-e1607556683533.jpg' },
    { produto: 'colulo', valor: 100, obs: 'cacilds', img: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1649065890' },
    { produto: 'Jóia', valor: 140, obs: 'cacilds', img: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1649065890' },
    { produto: 'pulsera', valor: 0.04, obs: 'cacilds', img: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1649065890' },
    { produto: 'Anél coisado', valor: 1.0, obs: 'cacilds', img: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1649065890' }
  ]

  ngOnInit(): void {

  }

}
