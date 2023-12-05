import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_part/pages/articles_page.dart';
import 'package:flutter_part/src/article.dart';

class AppWidget extends StatefulWidget {
  const AppWidget({super.key});

  @override
  State<AppWidget> createState() => _AppWidgetState();
}

class _AppWidgetState extends State<AppWidget> {
  final ValueNotifier<List<Article>> _articles = ValueNotifier<List<Article>>(
    [],
  );

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.lightBlueAccent),
        useMaterial3: true,
      ),
      debugShowCheckedModeBanner: false,
      home: ArticlesPage(
        articles: _articles,
      ),
    );
  }
}
