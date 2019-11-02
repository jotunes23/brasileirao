var brasileirao = {
  init: function () {
    brasileirao.makeRounds();
    brasileirao.play();
    brasileirao.reset();
    brasileirao.table();
  },

  data: {
    times: [
      {
        nome: 'Flamengo',
        pontos: 0,
        vitorias: 0,
        derrotas: 0,
        empates: 0,
        gols: 0
      },
      {
        nome: 'Grêmio',
        pontos: 0,
        vitorias: 0,
        derrotas: 0,
        empates: 0,
        gols: 0
      },
      {
        nome: 'Internacional',
        pontos: 0,
        vitorias: 0,
        derrotas: 0,
        empates: 0,
        gols: 0
      },
      {
        nome: 'Corinthians',
        pontos: 0,
        vitorias: 0,
        derrotas: 0,
        empates: 0,
        gols: 0
      },
      {
        nome: 'Palmeiras',
        pontos: 0,
        vitorias: 0,
        derrotas: 0,
        empates: 0,
        gols: 0
      },
      {
        nome: 'São Paulo',
        pontos: 0,
        vitorias: 0,
        derrotas: 0,
        empates: 0,
        gols: 0
      },
      {
        nome: 'Santos',
        pontos: 0,
        vitorias: 0,
        derrotas: 0,
        empates: 0,
        gols: 0
      },
      {
        nome: 'Athletico-PR',
        pontos: 0,
        vitorias: 0,
        derrotas: 0,
        empates: 0,
        gols: 0
      },
      {
        nome: 'Bahia',
        pontos: 0,
        vitorias: 0,
        derrotas: 0,
        empates: 0,
        gols: 0
      },
      {
        nome: 'Goiás',
        pontos: 0,
        vitorias: 0,
        derrotas: 0,
        empates: 0,
        gols: 0
      },
      {
        nome: 'Vasco',
        pontos: 0,
        vitorias: 0,
        derrotas: 0,
        empates: 0,
        gols: 0
      },
      {
        nome: 'Fortaleza',
        pontos: 0,
        vitorias: 0,
        derrotas: 0,
        empates: 0,
        gols: 0
      },
      {
        nome: 'Atlético-MG',
        pontos: 0,
        vitorias: 0,
        derrotas: 0,
        empates: 0,
        gols: 0
      },
      {
        nome: 'Botafogo',
        pontos: 0,
        vitorias: 0,
        derrotas: 0,
        empates: 0,
        gols: 0
      },
      {
        nome: 'Ceará',
        pontos: 0,
        vitorias: 0,
        derrotas: 0,
        empates: 0,
        gols: 0
      },
      {
        nome: 'Cruzeiro',
        pontos: 0,
        vitorias: 0,
        derrotas: 0,
        empates: 0,
        gols: 0
      },
      {
        nome: 'Fluminense',
        pontos: 0,
        vitorias: 0,
        derrotas: 0,
        empates: 0,
        gols: 0
      },
      {
        nome: 'CSA',
        pontos: 0,
        vitorias: 0,
        derrotas: 0,
        empates: 0,
        gols: 0
      },
      {
        nome: 'Chapecoense',
        pontos: 0,
        vitorias: 0,
        derrotas: 0,
        empates: 0,
        gols: 0
      },
      {
        nome: 'Avaí',
        pontos: 0,
        vitorias: 0,
        derrotas: 0,
        empates: 0,
        gols: 0
      },
    ],
    rounds: [],
    results: []
  },

  makeRounds: function () {
    var times = brasileirao.data.times;

    for (var indexGeral = 0; indexGeral < times.length; indexGeral++) {
      for (var indexSingle = 0; indexSingle < times.length; indexSingle++) {
        if(times[indexGeral].nome !== times[indexSingle].nome) {
          brasileirao.data.rounds.push({
            competidor: times[indexGeral],
            oponente: times[indexSingle]
          });
        }
      }
    }
  },

  playGames: function () {
    var rounds = brasileirao.data.rounds;
    var results = brasileirao.data.results;
    var times = brasileirao.data.times;

    rounds.forEach(function (round, index) {
      var competidorGols = Math.round(Math.random() * 5);
      var oponenteGols = Math.round(Math.random() * 5);

      results.push({
        competidor: round.competidor.nome,
        competidorGols: competidorGols,
        oponente: round.oponente.nome,
        oponenteGols: oponenteGols
      });

      round.competidor.gols += competidorGols;
      round.oponente.gols += oponenteGols;

      if(competidorGols > oponenteGols) {
        round.competidor.pontos += 3;
        round.competidor.vitorias += 1;
        round.oponente.derrotas += 1;
      } else if (competidorGols < oponenteGols) {
        round.oponente.pontos += 3;
        round.oponente.vitorias += 1;
        round.competidor.derrotas += 1;
      } else {
        round.competidor.pontos += 1;
        round.oponente.pontos += 1;
        round.competidor.empates += 1;
        round.oponente.empates += 1;
      }
    });

    times.sort(function (a, b) {
      return a.pontos < b.pontos ? 1 : -1;
    });

    brasileirao.table();
    brasileirao.resultList();
  },

  table: function () {
    var times = brasileirao.data.times;
    
    var itemList = times.map(function (time, index) {
      return '<tr>' +
        '<th scope="row">' + (index + 1) + '</th>' +
        '<th scope="row">' + time.pontos + '</th>' +
        '<td>' + time.nome + '</td>' +
        '<td>' + time.vitorias + '</td>' +
        '<td>' + time.gols + '</td>' +
        '<td>' + time.empates + '</td>' +
        '<td>' + time.derrotas + '</td>' +
      '</tr>';
    });

    $('#tabela tbody').html(itemList.toString());
  },

  resultList: function () {
    var resultados = brasileirao.data.results;

    var resultadosList = resultados.map(function (resultado, index) {
      return '<li>' +
        resultado.competidor + ' ' + resultado.competidorGols +
        ' x ' +
        resultado.oponente + ' ' + resultado.oponenteGols +
        '</li>';
    });

    $('#resultados').append(resultadosList.join(''));
  },

  reset: function () {
    $(document).on('click', 'button[data-js="reset"]', function(event) {
      location.reload();
    });
  },

  play: function() {
    $(document).on('click', 'button[data-js="play"]', function(event) {
      $(this).attr('disabled', 'disabled');
      $('button[data-js="reset"]').prop("disabled", false);
      brasileirao.playGames();
    });
  }
}

$(document).ready(function () {
  brasileirao.init();
})
