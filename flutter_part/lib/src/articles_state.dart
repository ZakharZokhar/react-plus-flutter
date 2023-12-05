import 'package:flutter/cupertino.dart';
import 'package:js/js.dart';

import 'article.dart';

@JSExport()
class ArticlesState {
  ArticlesState({required ValueNotifier<List<Article>> articles}) : _articles = articles;

  final ValueNotifier<List<Article>> _articles;

  void articleAdded(Article article) {
    _articles.value = [
      ..._articles.value,
      article,
    ];
  }
}
