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

  List<Article> getArticles() {
    return _articles.value;
  }

  void setArticles(List<Article> value) {
    _articles.value = value;
  }

  // Allows clients to subscribe to changes to the wrapped value.
  void onArticlesChanged(Function(List<Article>) f) {
    _articles.addListener(() {
      f(getArticles());
    });
  }
}
