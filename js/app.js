"use strict";var brasileirao={init:function(){brasileirao.makeRounds(),brasileirao.play(),brasileirao.reset(),brasileirao.table()},data:{times:[{nome:"Flamengo",pontos:0,vitorias:0,derrotas:0,empates:0,gols:0},{nome:"Grêmio",pontos:0,vitorias:0,derrotas:0,empates:0,gols:0},{nome:"Internacional",pontos:0,vitorias:0,derrotas:0,empates:0,gols:0},{nome:"Corinthians",pontos:0,vitorias:0,derrotas:0,empates:0,gols:0},{nome:"Palmeiras",pontos:0,vitorias:0,derrotas:0,empates:0,gols:0},{nome:"São Paulo",pontos:0,vitorias:0,derrotas:0,empates:0,gols:0},{nome:"Santos",pontos:0,vitorias:0,derrotas:0,empates:0,gols:0},{nome:"Athletico-PR",pontos:0,vitorias:0,derrotas:0,empates:0,gols:0},{nome:"Bahia",pontos:0,vitorias:0,derrotas:0,empates:0,gols:0},{nome:"Goiás",pontos:0,vitorias:0,derrotas:0,empates:0,gols:0},{nome:"Vasco",pontos:0,vitorias:0,derrotas:0,empates:0,gols:0},{nome:"Fortaleza",pontos:0,vitorias:0,derrotas:0,empates:0,gols:0},{nome:"Atlético-MG",pontos:0,vitorias:0,derrotas:0,empates:0,gols:0},{nome:"Botafogo",pontos:0,vitorias:0,derrotas:0,empates:0,gols:0},{nome:"Ceará",pontos:0,vitorias:0,derrotas:0,empates:0,gols:0},{nome:"Cruzeiro",pontos:0,vitorias:0,derrotas:0,empates:0,gols:0},{nome:"Fluminense",pontos:0,vitorias:0,derrotas:0,empates:0,gols:0},{nome:"CSA",pontos:0,vitorias:0,derrotas:0,empates:0,gols:0},{nome:"Chapecoense",pontos:0,vitorias:0,derrotas:0,empates:0,gols:0},{nome:"Avaí",pontos:0,vitorias:0,derrotas:0,empates:0,gols:0}],rounds:[],results:[]},makeRounds:function(){for(var o=brasileirao.data.times,t=0;t<o.length;t++)for(var e=0;e<o.length;e++)o[t].nome!==o[e].nome&&brasileirao.data.rounds.push({competidor:o[t],oponente:o[e]})},playGames:function(){var o=brasileirao.data.rounds,a=brasileirao.data.results,t=brasileirao.data.times;o.forEach(function(o,t){var e=Math.round(5*Math.random()),s=Math.round(5*Math.random());a.push({competidor:o.competidor.nome,competidorGols:e,oponente:o.oponente.nome,oponenteGols:s}),o.competidor.gols+=e,o.oponente.gols+=s,s<e?(o.competidor.pontos+=3,o.competidor.vitorias+=1,o.oponente.derrotas+=1):e<s?(o.oponente.pontos+=3,o.oponente.vitorias+=1,o.competidor.derrotas+=1):(o.competidor.pontos+=1,o.oponente.pontos+=1,o.competidor.empates+=1,o.oponente.empates+=1)}),t.sort(function(o,t){return o.pontos<t.pontos?1:-1}),brasileirao.table(),brasileirao.resultList()},table:function(){var o=brasileirao.data.times.map(function(o,t){return'<tr><th scope="row">'+(t+1)+'</th><th scope="row">'+o.pontos+"</th><td>"+o.nome+"</td><td>"+o.vitorias+"</td><td>"+o.gols+"</td><td>"+o.empates+"</td><td>"+o.derrotas+"</td></tr>"});$("#tabela tbody").html(o.toString())},resultList:function(){var o=brasileirao.data.results.map(function(o,t){return"<li>"+o.competidor+" "+o.competidorGols+" x "+o.oponente+" "+o.oponenteGols+"</li>"});$("#resultados").append(o.join(""))},reset:function(){$(document).on("click",'button[data-js="reset"]',function(o){location.reload()})},play:function(){$(document).on("click",'button[data-js="play"]',function(o){$(this).attr("disabled","disabled"),$('button[data-js="reset"]').prop("disabled",!1),brasileirao.playGames()})}};$(document).ready(function(){brasileirao.init()});