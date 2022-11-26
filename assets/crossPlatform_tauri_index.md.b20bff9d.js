import{_ as s,c as a,o as n,a as e}from"./app.c68b2f5b.js";const l="/vitepress-website/image/crossPlatform/Snipaste_2022-11-26_18-55-59.png",A=JSON.parse('{"title":"\u914D\u7F6E\u73AF\u5883(MacOS)","description":"","frontmatter":{},"headers":[{"level":2,"title":"CLang \u548C macOS \u5F00\u53D1\u4F9D\u8D56\u9879","slug":"clang-\u548C-macos-\u5F00\u53D1\u4F9D\u8D56\u9879","link":"#clang-\u548C-macos-\u5F00\u53D1\u4F9D\u8D56\u9879","children":[]},{"level":2,"title":"\u5B89\u88C5 Rust","slug":"\u5B89\u88C5-rust","link":"#\u5B89\u88C5-rust","children":[]},{"level":2,"title":"\u914D\u7F6E\u73AF\u5883\u53D8\u91CF","slug":"\u914D\u7F6E\u73AF\u5883\u53D8\u91CF","link":"#\u914D\u7F6E\u73AF\u5883\u53D8\u91CF","children":[]},{"level":2,"title":"\u5B89\u88C5create-tauri-app\u811A\u624B\u67B6","slug":"\u5B89\u88C5create-tauri-app\u811A\u624B\u67B6","link":"#\u5B89\u88C5create-tauri-app\u811A\u624B\u67B6","children":[{"level":3,"title":"\u521B\u5EFAtauri\u5E94\u7528","slug":"\u521B\u5EFAtauri\u5E94\u7528","link":"#\u521B\u5EFAtauri\u5E94\u7528","children":[]},{"level":3,"title":"\u5B89\u88C5\u4F9D\u8D56","slug":"\u5B89\u88C5\u4F9D\u8D56","link":"#\u5B89\u88C5\u4F9D\u8D56","children":[]},{"level":3,"title":"\u542F\u52A8","slug":"\u542F\u52A8","link":"#\u542F\u52A8","children":[]}]}],"relativePath":"crossPlatform/tauri/index.md"}'),c={name:"crossPlatform/tauri/index.md"},t=e(`<h1 id="\u914D\u7F6E\u73AF\u5883-macos" tabindex="-1">\u914D\u7F6E\u73AF\u5883(MacOS) <a class="header-anchor" href="#\u914D\u7F6E\u73AF\u5883-macos" aria-hidden="true">#</a></h1><h2 id="clang-\u548C-macos-\u5F00\u53D1\u4F9D\u8D56\u9879" tabindex="-1">CLang \u548C macOS \u5F00\u53D1\u4F9D\u8D56\u9879 <a class="header-anchor" href="#clang-\u548C-macos-\u5F00\u53D1\u4F9D\u8D56\u9879" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">xcode-select --install</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5B89\u88C5-rust" tabindex="-1">\u5B89\u88C5 Rust <a class="header-anchor" href="#\u5B89\u88C5-rust" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">curl --proto &#39;=https&#39; --tlsv1.2 https://sh.rustup.rs -sSf | sh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5B89\u88C5\u5B8C\u6210\u529F\uFF0C\u63D0\u793A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Rust is installed now. Great!</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">To get started you may need to restart your current shell.</span></span>
<span class="line"><span style="color:#A6ACCD;">This would reload your PATH environment variable to include</span></span>
<span class="line"><span style="color:#A6ACCD;">Cargo&#39;s bin directory ($HOME/.cargo/bin).</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">To configure your current shell, run:</span></span>
<span class="line"><span style="color:#A6ACCD;">source &quot;$HOME/.cargo/env&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u914D\u7F6E\u73AF\u5883\u53D8\u91CF" tabindex="-1">\u914D\u7F6E\u73AF\u5883\u53D8\u91CF <a class="header-anchor" href="#\u914D\u7F6E\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">source ~/.cargo/env</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u67E5\u770B\u7248\u672C\uFF0C\u662F\u5426\u5B89\u88C5\u6210\u529F</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">cargo --version</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">rustc --version</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5B89\u88C5create-tauri-app\u811A\u624B\u67B6" tabindex="-1">\u5B89\u88C5<code>create-tauri-app</code>\u811A\u624B\u67B6 <a class="header-anchor" href="#\u5B89\u88C5create-tauri-app\u811A\u624B\u67B6" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">cargo install create-tauri-app</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u521B\u5EFAtauri\u5E94\u7528" tabindex="-1">\u521B\u5EFA<code>tauri</code>\u5E94\u7528 <a class="header-anchor" href="#\u521B\u5EFAtauri\u5E94\u7528" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">cargo create-tauri-app</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u5B89\u88C5\u4F9D\u8D56" tabindex="-1">\u5B89\u88C5\u4F9D\u8D56 <a class="header-anchor" href="#\u5B89\u88C5\u4F9D\u8D56" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">cargo install tauri-cli</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u542F\u52A8" tabindex="-1">\u542F\u52A8 <a class="header-anchor" href="#\u542F\u52A8" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">cargo tauri dev</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="`+l+'" alt="An image"></p>',21),p=[t];function o(r,i,d,u,C,h){return n(),a("div",null,p)}const y=s(c,[["render",o]]);export{A as __pageData,y as default};
