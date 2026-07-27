const { execSync } = require('child_process');

try {
  execSync('npx commitlint --edit ' + process.argv[2], {
    stdio: 'inherit',
  });
} catch (e) {
  console.log('\n❌ Erro no padrão do commit!\n');

  console.log('👉 Formato correto:');
  console.log('   tipo: descrição\n');

  console.log('👉 Tipos permitidos:');
  console.log('   feat     → nova funcionalidade');
  console.log('   fix      → correção de bug');
  console.log('   refactor → melhoria de código');
  console.log('   build    → mudanças de build');
  console.log('   test     → testes');
  console.log('   docs     → documentação\n');

  console.log('👉 Exemplo válido:');
  console.log('   feat: adiciona login de usuário\n');

  process.exit(1);
}
