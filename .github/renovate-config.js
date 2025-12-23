module.exports = {
  platform: "github",
  allowedCommands: [
    "^bump-chart$",
    "^helm-docs --template-files _templates/helm-docs/README\\.md\\.gotmpl$",
    "^gomplate -o README\\.md -f _templates/readme/README\\.md\\.gotmpl -d readme=_templates/readme/README\\.yaml$",
  ],
};
