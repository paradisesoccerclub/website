"#menu".click(function(s){s.preventDefault();var e=".nav-items".hasClass("is-visible")?"removeClass":"addClass";".nav-items".removeClass("is-visible"),".nav-items"[e]("is-visible")});