import 'package:flutter/material.dart';
import 'package:flutter_part/src/article.dart';

class ArticlesPage extends StatelessWidget {
  const ArticlesPage({
    super.key,
    required this.articles,
  });

  final ValueNotifier<List<Article>> articles;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: const Text('Articles'),
      ),
      body: ValueListenableBuilder(
        valueListenable: articles,
        builder: (context, articles, child) {
          if (articles.isEmpty) {
            return const Center(
              child: CircularProgressIndicator(),
            );
          }
          return ListView.separated(
            itemBuilder: (context, index) => Container(
              padding: const EdgeInsets.all(16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisSize: MainAxisSize.min,
                children: [
                  Row(
                    mainAxisSize: MainAxisSize.max,
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(articles[index].author),
                      Text(_formatDateTime(articles[index].timestampIsoString)),
                    ],
                  ),
                  const SizedBox(
                    height: 8,
                  ),
                  Text(articles[index].title),
                  const SizedBox(
                    height: 8,
                  ),
                  Text(
                    articles[index].body,
                    maxLines: 5,
                  ),
                  if (articles[index].images.isNotEmpty)
                    Container(
                      height: 60,
                      padding: const EdgeInsets.only(top: 8),
                      child: ListView.separated(
                        itemBuilder: (context, imageIndex) => Image.memory(
                          articles[index].images[imageIndex],
                          height: 60,
                          width: 60,
                          fit: BoxFit.cover,
                        ),
                        separatorBuilder: (context, index) => const SizedBox(
                          width: 8,
                        ),
                        shrinkWrap: true,
                        scrollDirection: Axis.horizontal,
                        itemCount: articles[index].images.length,
                      ),
                    ),
                ],
              ),
            ),
            separatorBuilder: (context, index) => const Divider(
              indent: 16,
              endIndent: 16,
              height: 1,
            ),
            itemCount: articles.length,
          );
        },
      ),
    );
  }

  String _formatDateTime(String timestamp) {
    final date = DateTime.parse(timestamp);
    return '${date.day}/${date.month}/${date.year}';
  }
}
