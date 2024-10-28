{pkgs}: {
  channel = "stable-23.11";
  packages = [
    pkgs.nodejs_20
  ];
  idx.extensions = [
    "svelte.svelte-vscode"
    "vue.volar"
    "vscodevim.vim"
    "ms-python.debugpy"
    "ms-python.python"
    "esbenp.prettier-vscode"
  ];
  idx.previews = {
    previews = {
      web = {
        command = [
          "docker"
          "compose"
          "up"
         # "npm"
         # "run"
         # "dev"
         # "--"
         # "--port"
         # "$PORT"
         # "--host"
         # "0.0.0.0"
        ];
        manager = "web";
      };
    };
  };
   services.docker.enable = true;
}