package content

import (
	"bytes"
	"fmt"
	"os"
	"path"
	"strings"

	"bduckdotdev/pkg/embedder"

	"github.com/yuin/goldmark"
	"github.com/yuin/goldmark/parser"
	"github.com/yuin/goldmark/renderer/html"
	"go.abhg.dev/goldmark/frontmatter"
)

type Metadata struct {
	Title       string `yaml:"title"`
	Date        string `yaml:"date"`
	Description string `yaml:"description"`
	Image       string `yaml:"image"`
}

type Post struct {
	Meta    Metadata
	Content string
	Slug    string
}

var md = goldmark.New(
	goldmark.WithRendererOptions(
		html.WithUnsafe(),
	),
	goldmark.WithExtensions(
		&frontmatter.Extender{},
		embedder.New(),
	),
)

// Load one post from ./content/ via a specific directory and filename
func LoadPost(dir, filename string) Post {
	var buf bytes.Buffer
	f := path.Join("./content/", dir, filename)
	src, err := os.ReadFile(f)
	if err != nil {
		fmt.Println(err)
	}

	ctx := parser.NewContext()
	md.Convert(src, &buf, parser.WithContext(ctx))
	post := Post{Meta: getMetadata(ctx), Content: buf.String(), Slug: strings.TrimSuffix(filename, ".md")}

	return post
}

// Load all posts from a specific directory in ./content/
func LoadPosts(dir string) []Post {
	files := listAllMarkdownFiles(dir)
	var posts []Post
	for _, file := range files {
		p := LoadPost(dir, file.Name())
		posts = append(posts, p)
	}

	return posts
}

// get metadata for a post via the parser context
func getMetadata(ctx parser.Context) Metadata {
	var meta Metadata
	d := frontmatter.Get(ctx)
	if err := d.Decode(&meta); err != nil {
		fmt.Println(err)
	}

	return meta
}

// list all markdown files in a specific subdirectory of ./content/
func listAllMarkdownFiles(p string) []os.DirEntry {
	fullPath := path.Join("./content/", p)
	files, err := os.ReadDir(fullPath)
	var out []os.DirEntry
	if err != nil {
		fmt.Println(err)
	}
	for _, f := range files {
		if strings.HasSuffix(f.Name(), ".md") {
			out = append(out, f)
		}
	}
	return out
}
