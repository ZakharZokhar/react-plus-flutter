import 'package:flutter/material.dart';
import 'package:flutter_part/pages/articles_page.dart';
import 'package:flutter_part/src/article.dart';
import 'package:flutter_part/src/articles_state.dart';
import 'package:flutter_part/src/js_interop.dart';

class AppWidget extends StatefulWidget {
  const AppWidget({super.key});

  @override
  State<AppWidget> createState() => _AppWidgetState();
}

class _AppWidgetState extends State<AppWidget> {
  final ValueNotifier<List<Article>> _articles = ValueNotifier<List<Article>>(
    [],
  );

  late final ArticlesState _state;

  @override
  void initState() {
    super.initState();
    _state = ArticlesState(
      articles: _articles,
    );
    final export = createDartExport(_state);

    // Emit this through the root object of the flutter app :)
    broadcastAppEvent('flutter-initialized', export);
  }

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
