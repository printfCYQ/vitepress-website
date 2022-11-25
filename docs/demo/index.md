---
title: Blogging Like a Hacker
lang: en-US
sidebar: true
navbar: true
layout: doc
head:
  - - meta
    - name: description
      content: hello
  - - meta
    - name: keywords
      content: super duper SEO
---

# 哈哈哈

```js
import { Module } from "@nestjs/common";
import { BookController } from "./book.controller";
import { BookService } from "./book.service";
import { BookService2 } from "./book.service2";

@Module({
  controllers: [BookController],
  providers: [
    BookService2,
    {
      provide: "CYQService",
      useClass: BookService,
    },
    {
      provide: "APP",
      useValue: ["TB", "PDD", "JD"],
    },
    {
      provide: "Test",
      inject: [BookService2],
      useFactory(BookService2: BookService2) {
        return BookService2.findAll();
      },
    },
    {
      provide: "sync",
      async useFactory() {
        return await new Promise((resolve) => {
          setTimeout(() => {
            resolve("sync useFactory");
          }, 3000);
        });
      },
    },
  ],
})
export class BookModule {}
```

# 哈哈哈

```js
import { Module } from "@nestjs/common";
import { BookController } from "./book.controller";
import { BookService } from "./book.service";
import { BookService2 } from "./book.service2";

@Module({
  controllers: [BookController],
  providers: [
    BookService2,
    {
      provide: "CYQService",
      useClass: BookService,
    },
    {
      provide: "APP",
      useValue: ["TB", "PDD", "JD"],
    },
    {
      provide: "Test",
      inject: [BookService2],
      useFactory(BookService2: BookService2) {
        return BookService2.findAll();
      },
    },
    {
      provide: "sync",
      async useFactory() {
        return await new Promise((resolve) => {
          setTimeout(() => {
            resolve("sync useFactory");
          }, 3000);
        });
      },
    },
  ],
})
export class BookModule {}
```

# 哈哈哈

```js
import { Module } from "@nestjs/common";
import { BookController } from "./book.controller";
import { BookService } from "./book.service";
import { BookService2 } from "./book.service2";

@Module({
  controllers: [BookController],
  providers: [
    BookService2,
    {
      provide: "CYQService",
      useClass: BookService,
    },
    {
      provide: "APP",
      useValue: ["TB", "PDD", "JD"],
    },
    {
      provide: "Test",
      inject: [BookService2],
      useFactory(BookService2: BookService2) {
        return BookService2.findAll();
      },
    },
    {
      provide: "sync",
      async useFactory() {
        return await new Promise((resolve) => {
          setTimeout(() => {
            resolve("sync useFactory");
          }, 3000);
        });
      },
    },
  ],
})
export class BookModule {}
```

# 哈哈哈

```js
import { Module } from "@nestjs/common";
import { BookController } from "./book.controller";
import { BookService } from "./book.service";
import { BookService2 } from "./book.service2";

@Module({
  controllers: [BookController],
  providers: [
    BookService2,
    {
      provide: "CYQService",
      useClass: BookService,
    },
    {
      provide: "APP",
      useValue: ["TB", "PDD", "JD"],
    },
    {
      provide: "Test",
      inject: [BookService2],
      useFactory(BookService2: BookService2) {
        return BookService2.findAll();
      },
    },
    {
      provide: "sync",
      async useFactory() {
        return await new Promise((resolve) => {
          setTimeout(() => {
            resolve("sync useFactory");
          }, 3000);
        });
      },
    },
  ],
})
export class BookModule {}
```

# 哈哈哈

```js
import { Module } from "@nestjs/common";
import { BookController } from "./book.controller";
import { BookService } from "./book.service";
import { BookService2 } from "./book.service2";

@Module({
  controllers: [BookController],
  providers: [
    BookService2,
    {
      provide: "CYQService",
      useClass: BookService,
    },
    {
      provide: "APP",
      useValue: ["TB", "PDD", "JD"],
    },
    {
      provide: "Test",
      inject: [BookService2],
      useFactory(BookService2: BookService2) {
        return BookService2.findAll();
      },
    },
    {
      provide: "sync",
      async useFactory() {
        return await new Promise((resolve) => {
          setTimeout(() => {
            resolve("sync useFactory");
          }, 3000);
        });
      },
    },
  ],
})
export class BookModule {}
```
