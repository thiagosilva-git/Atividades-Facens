 // Lê parâmetros da query string
    function qs(key){const u=new URL(window.location.href);return u.searchParams.get(key)}
    document.getElementById('clientId').textContent = qs('client_id') || '—';
    document.getElementById('authId').textContent = qs('authorization_id') || '—';

    document.getElementById('altSign').addEventListener('click', function(){
      alert('Fluxo de login por app (simulado)');
    });

    document.getElementById('esqueci').addEventListener('click', function(e){e.preventDefault();alert('Fluxo de recuperação de senha (simulado)');});
    document.getElementById('criar').addEventListener('click', function(e){e.preventDefault();alert('Fluxo de criação de conta gov.br (simulado)');});