{
    "type": "object",
    "properties": {
      "name": { "type": "string" },
      "version": { "type": "string" },
      "private": { "type": "boolean" },
      "scripts": {
        "type": "object",
        "properties": {
            "start": { "type": "string" },
        }
      },
      "dependencies": {
        "type": "object",
        "properties": {
            "cookie-parser": { "type": "string" },
            "debug": { "type": "string" },
            "ejs": { "type": "string" },
            "express": { "type": "string" },
            "http-errors": { "type": "string" },
            "morgan": { "type": "string" },
            "nconf": { "type": "string" },
            "node-sass-middleware": { "type": "string" },
        }
      },
      "devDependencies": {
        "type": "object",
        "properties": {
          "babel-eslint":  {"type": "string"},
          "eslint": { "type": "string"},
          "eslint-config-airbnb":  {"type": "string"},
          "eslint-plugin-import":  {"type": "string"},
          "eslint-plugin-jsx-a11y": { "type": "string"},
          "eslint-plugin-react":  {"type": "string"},
        }
      },
    },
  }






  {
    "type": "object",
    "properties": {
      "name": { "type": "string" },
      "version": { "type": "string" },
      "private": { "type": "boolean" },
      "scripts": {
        "type": "object",
        "properties": {
            "start": { "type": "string" },
        }
      },
      "dependencies": {
        "type": "object",
        
      },
      "devDependencies": {
        "type": "object",
        "propertiNames": { "type": "string" },
        
      },
    },
  }

  {
    "type": "object",
    "properties": {
      "name": { "type": "string" },
      "version": { "type": "string" },
      "private": { "type": "boolean" },
      "scripts": {
        "type": "object",
        "minProperties": 1,
        "propertiNames": { "type": "string" },
      },
      "dependencies": {
        "type": "object",
        "propertiNames": { "type": "string" },
      },
      "devDependencies": {
        "type": "object",
        "propertiNames": { "type": "string" },
        
      },
    },
  }